import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitWaitlistEntry } from "@/data/staticData";

const waitlistSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });
  
  async function onSubmit(values: WaitlistFormValues) {
    setIsSubmitting(true);
    
    try {
      // Use the static function for GitHub Pages deployment
      const result = await submitWaitlistEntry(values.email, "");
      
      toast({
        title: "Success!",
        description: "You have been added to our waitlist.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section id="waitlist" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-primary to-purple-500 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <motion.h2 
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get Early Access
              </motion.h2>
              <motion.p 
                className="mt-4 max-w-3xl text-lg text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our exclusive waitlist and be among the first to experience our product. Early access members will receive special benefits and pricing.
              </motion.p>
            </div>
            <motion.div 
              className="mt-12 lg:mt-0 lg:ml-8 lg:w-full lg:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="sm:flex">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              className="w-full px-5 py-3 border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white bg-white/10 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-200 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-white px-5 py-3 border border-transparent rounded-md font-medium text-primary hover:bg-primary/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white sm:w-auto transition-colors"
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                </form>
              </Form>
              <p className="mt-3 text-sm text-primary-100">
                We respect your privacy. No spam, ever.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
