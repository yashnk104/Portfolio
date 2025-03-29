import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Project, projectSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  AlertCircle, 
  PlusCircle, 
  Trash2, 
  Edit2, 
  Save, 
  X, 
  Check 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Helper function to validate API key and headers
const getAuthHeaders = () => {
  const apiKey = localStorage.getItem('adminApiKey');
  if (!apiKey) {
    return null;
  }
  return {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey
  };
};

export default function AdminPage() {
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('adminApiKey') || '');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(!!localStorage.getItem('adminApiKey'));
  const [editingProject, setEditingProject] = useState<(Project & {
    technologies: string[] | string;
    features: string[] | string;
  }) | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [newProject, setNewProject] = useState<Partial<Project> & {
    technologies: string[] | string;
    features: string[] | string;
  }>({
    title: '',
    description: '',
    image: '',
    altText: '',
    tag: '',
    technologies: [],
    features: [],
    demoLink: '',
    codeLink: '',
    published: true
  });
  
  const queryClient = useQueryClient();
  
  // API Data Fetching
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['/api/admin/projects'],
    queryFn: async () => {
      const headers = getAuthHeaders();
      if (!headers) {
        throw new Error('No API key provided');
      }
      
      const response = await fetch('/api/admin/projects', { headers });
      if (!response.ok) {
        if (response.status === 401) {
          setIsAuthorized(false);
          localStorage.removeItem('adminApiKey');
          throw new Error('Unauthorized. Please check your API key.');
        }
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      return data.projects as Project[];
    },
    enabled: isAuthorized
  });
  
  // API Mutations
  const createProjectMutation = useMutation({
    mutationFn: async (newProject: Partial<Project>) => {
      const headers = getAuthHeaders();
      if (!headers) {
        throw new Error('No API key provided');
      }
      
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers,
        body: JSON.stringify(newProject)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/projects'] });
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      toast({
        title: "Success!",
        description: "Project created successfully",
      });
      setIsCreatingProject(false);
      setNewProject({
        title: '',
        description: '',
        image: '',
        altText: '',
        tag: '',
        technologies: [],
        features: [],
        demoLink: '',
        codeLink: '',
        published: true
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create project: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const updateProjectMutation = useMutation({
    mutationFn: async (project: Project) => {
      const headers = getAuthHeaders();
      if (!headers) {
        throw new Error('No API key provided');
      }
      
      const response = await fetch(`/api/admin/projects/${project.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(project)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update project');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/projects'] });
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      toast({
        title: "Success!",
        description: "Project updated successfully",
      });
      setEditingProject(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update project: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: async (id: number) => {
      const headers = getAuthHeaders();
      if (!headers) {
        throw new Error('No API key provided');
      }
      
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/projects'] });
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      toast({
        title: "Success!",
        description: "Project deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete project: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  // Methods
  const handleLogin = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter an API key",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem('adminApiKey', apiKey);
    setIsAuthorized(true);
    queryClient.invalidateQueries({ queryKey: ['/api/admin/projects'] });
    
    toast({
      title: "Success!",
      description: "API key saved. Attempting to access admin API.",
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminApiKey');
    setApiKey('');
    setIsAuthorized(false);
    
    toast({
      title: "Logged out",
      description: "API key has been removed",
    });
  };
  
  const handleCreateProjectSubmit = () => {
    try {
      // Convert comma-separated strings to arrays for technologies and features
      const formattedProject = {
        ...newProject,
        technologies: typeof newProject.technologies === 'string' 
          ? (newProject.technologies as string).split(',').map(item => item.trim())
          : newProject.technologies,
        features: typeof newProject.features === 'string'
          ? (newProject.features as string).split(',').map(item => item.trim())
          : newProject.features
      };
      
      createProjectMutation.mutate(formattedProject);
    } catch (err: any) {
      toast({
        title: "Validation Error",
        description: err.message,
        variant: "destructive"
      });
    }
  };
  
  const handleUpdateProjectSubmit = () => {
    if (!editingProject) return;
    
    try {
      // Convert comma-separated strings to arrays if needed
      const formattedProject = {
        ...editingProject,
        technologies: typeof editingProject.technologies === 'string' 
          ? (editingProject.technologies as unknown as string).split(',').map(item => item.trim())
          : editingProject.technologies,
        features: typeof editingProject.features === 'string'
          ? (editingProject.features as unknown as string).split(',').map(item => item.trim())
          : editingProject.features
      };
      
      updateProjectMutation.mutate(formattedProject as Project);
    } catch (err: any) {
      toast({
        title: "Validation Error",
        description: err.message,
        variant: "destructive"
      });
    }
  };
  
  const handleDeleteProject = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      deleteProjectMutation.mutate(id);
    }
  };
  
  // Render Login form if not authorized
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <Label htmlFor="apiKey">Admin API Key</Label>
                <Input
                  id="apiKey"
                  name="apiKey"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  onClick={handleLogin}
                >
                  Login to Admin Panel
                </Button>
              </div>
              
              <div className="text-sm text-center text-gray-500">
                <p>Enter your admin API key to manage projects.</p>
                <p className="mt-2">If you don't have a key, check your environment variables for ADMIN_API_KEY.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Main admin interface
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Management</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Dialog open={isCreatingProject} onOpenChange={setIsCreatingProject}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Fill in the details for your new project. All fields are required.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title"
                      value={newProject.title || ''}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tag">Tag/Category</Label>
                    <Input 
                      id="tag"
                      value={newProject.tag || ''}
                      onChange={(e) => setNewProject({...newProject, tag: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      value={newProject.description || ''}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input 
                      id="image"
                      value={newProject.image || ''}
                      onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="altText">Image Alt Text</Label>
                    <Input 
                      id="altText"
                      value={newProject.altText || ''}
                      onChange={(e) => setNewProject({...newProject, altText: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="demoLink">Demo Link</Label>
                    <Input 
                      id="demoLink"
                      value={newProject.demoLink || ''}
                      onChange={(e) => setNewProject({...newProject, demoLink: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="codeLink">Code Repository Link</Label>
                    <Input 
                      id="codeLink"
                      value={newProject.codeLink || ''}
                      onChange={(e) => setNewProject({...newProject, codeLink: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                    <Input 
                      id="technologies"
                      value={Array.isArray(newProject.technologies) ? newProject.technologies.join(', ') : newProject.technologies || ''}
                      onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                      placeholder="React, TypeScript, Node.js, etc."
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="features">Key Features (comma-separated)</Label>
                    <Textarea 
                      id="features"
                      value={Array.isArray(newProject.features) ? newProject.features.join(', ') : newProject.features || ''}
                      onChange={(e) => setNewProject({...newProject, features: e.target.value})}
                      rows={3}
                      placeholder="Feature 1, Feature 2, Feature 3, etc."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="published">Published</Label>
                    <Switch 
                      id="published"
                      checked={!!newProject.published}
                      onCheckedChange={(checked) => setNewProject({...newProject, published: checked})}
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreatingProject(false)}>Cancel</Button>
                  <Button 
                    onClick={handleCreateProjectSubmit}
                    disabled={createProjectMutation.isPending}
                  >
                    {createProjectMutation.isPending ? 'Creating...' : 'Create Project'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {isLoading ? (
            <div className="text-center py-10">
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
              </div>
              <p className="mt-4 text-gray-500">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-lg font-medium text-red-800">Failed to load projects</h3>
              <p className="mt-2 text-gray-600">{(error as Error).message}</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => queryClient.invalidateQueries({ queryKey: ['/api/admin/projects'] })}
              >
                Try Again
              </Button>
            </div>
          ) : projects && projects.length > 0 ? (
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableCaption>A list of your portfolio projects</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>{project.tag}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {project.published ? 'Published' : 'Draft'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog open={!!editingProject && editingProject.id === project.id} onOpenChange={(open) => !open && setEditingProject(null)}>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setEditingProject(project)}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Edit Project</DialogTitle>
                                <DialogDescription>
                                  Update your project details below
                                </DialogDescription>
                              </DialogHeader>
                              
                              {editingProject && (
                                <>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-title">Title</Label>
                                      <Input 
                                        id="edit-title"
                                        value={editingProject.title}
                                        onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-tag">Tag/Category</Label>
                                      <Input 
                                        id="edit-tag"
                                        value={editingProject.tag}
                                        onChange={(e) => setEditingProject({...editingProject, tag: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2 md:col-span-2">
                                      <Label htmlFor="edit-description">Description</Label>
                                      <Textarea 
                                        id="edit-description"
                                        value={editingProject.description}
                                        onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                                        rows={3}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-image">Image URL</Label>
                                      <Input 
                                        id="edit-image"
                                        value={editingProject.image}
                                        onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-altText">Image Alt Text</Label>
                                      <Input 
                                        id="edit-altText"
                                        value={editingProject.altText}
                                        onChange={(e) => setEditingProject({...editingProject, altText: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-demoLink">Demo Link</Label>
                                      <Input 
                                        id="edit-demoLink"
                                        value={editingProject.demoLink}
                                        onChange={(e) => setEditingProject({...editingProject, demoLink: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-codeLink">Code Repository Link</Label>
                                      <Input 
                                        id="edit-codeLink"
                                        value={editingProject.codeLink}
                                        onChange={(e) => setEditingProject({...editingProject, codeLink: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2 md:col-span-2">
                                      <Label htmlFor="edit-technologies">Technologies (comma-separated)</Label>
                                      <Input 
                                        id="edit-technologies"
                                        value={Array.isArray(editingProject.technologies) ? editingProject.technologies.join(', ') : editingProject.technologies}
                                        onChange={(e) => setEditingProject({...editingProject, technologies: e.target.value})}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2 md:col-span-2">
                                      <Label htmlFor="edit-features">Key Features (comma-separated)</Label>
                                      <Textarea 
                                        id="edit-features"
                                        value={Array.isArray(editingProject.features) ? editingProject.features.join(', ') : editingProject.features}
                                        onChange={(e) => setEditingProject({...editingProject, features: e.target.value})}
                                        rows={3}
                                      />
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                      <Label htmlFor="edit-published">Published</Label>
                                      <Switch 
                                        id="edit-published"
                                        checked={!!editingProject.published}
                                        onCheckedChange={(checked) => setEditingProject({...editingProject, published: checked})}
                                      />
                                    </div>
                                  </div>
                                  
                                  <DialogFooter>
                                    <Button 
                                      variant="outline" 
                                      onClick={() => setEditingProject(null)}
                                    >
                                      Cancel
                                    </Button>
                                    <Button 
                                      onClick={handleUpdateProjectSubmit}
                                      disabled={updateProjectMutation.isPending}
                                    >
                                      {updateProjectMutation.isPending ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                  </DialogFooter>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteProject(project.id)}
                            disabled={deleteProjectMutation.isPending}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="rounded-full bg-gray-100 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <PlusCircle className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium">No projects found</h3>
              <p className="mt-2 text-gray-600">Get started by creating a new project</p>
              <Button 
                className="mt-4"
                onClick={() => setIsCreatingProject(true)}
              >
                Add Your First Project
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">API Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Available API Endpoints</h3>
              <div className="mt-2 text-sm bg-gray-50 p-3 rounded border">
                <pre className="whitespace-pre-wrap">
{`GET /api/projects
GET /api/projects/:id
GET /api/admin/projects (requires auth)
POST /api/admin/projects (requires auth)
PUT /api/admin/projects/:id (requires auth)
DELETE /api/admin/projects/:id (requires auth)`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium">Authentication</h3>
              <p className="mt-1 text-sm text-gray-600">
                Admin API endpoints require the X-API-Key header with your admin API key.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}