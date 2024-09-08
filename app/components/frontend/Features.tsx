import { CloudRain } from "lucide-react";

const features = [
    {
        name: "Sign Up for Free",
        description:
          "Start your blogging journey with a free site. It’s the perfect way to get started without any initial cost, and easily upgrade later to manage multiple blogs.",
        icon: CloudRain,
      },
      {
        name: "Blazing Fast Performance",
        description:
          "Experience rapid site loading and performance. The platform ensures your blogs load quickly, providing a smooth experience for both you and your readers.",
        icon: CloudRain,
      },
      {
        name: "Super Secure with Kinde",
        description:
          "Enjoy robust security features with Kinde integration. Your data and blogs are protected with top-notch security, ensuring peace of mind as you grow your content.",
        icon: CloudRain,
      },
      {
        name: "User-Friendly Platform",
        description:
          "Easily create and manage your blogs with an intuitive interface. The platform is designed for simplicity, making content creation and management effortless.",
        icon: CloudRain,
      },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Get your blog up and running in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Right here you can create a blog in minutes. We make it easy for you
          to create a blog in minutes. The blog is very fast and easy to create.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white dark:invert" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}