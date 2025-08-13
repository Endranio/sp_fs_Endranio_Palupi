import { Clock, Target } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Increase Productivity",
      description:
        "Streamline workflows and eliminate bottlenecks to boost team productivity by up to 40%.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Automate repetitive tasks and reduce project planning time from hours to minutes.",
    },
  ];
  return (
    <section className="bg-muted/50 py-24 sm:py-20">
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Why choose ProjectFlow?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Transform the way your team works with measurable improvements to
            productivity and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
