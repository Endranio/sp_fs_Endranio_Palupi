import { Calendar, Shield, Users, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Feature() {
  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Invite team members, assign tasks, and collaborate in real-time with powerful project management tools.",
    },
    {
      icon: Calendar,
      title: "Task Management",
      description:
        "Create, organize, and track tasks with our intuitive kanban board system and deadline management.",
    },

    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built with modern technology for blazing fast performance and seamless user experience.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and privacy controls.",
    },
  ];

  return (
    <div className="mt-20 m-10">
      <div className="">
        <h1 className="font-bold text-5xl text-center mb-5">
          Everything you need to manage projects
        </h1>
        <p className="text-xl text-center">
          Powerful features designed to help teams collaborate effectively and
          deliver results faster.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-15">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="relative overflow-hidden hover:shadow-lg transition-shadow bg-transparent"
          >
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-3xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
