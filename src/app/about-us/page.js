"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-72 w-full">
        <Image
          src="/assets/mount-art-and-shelves.jpg"
          alt="About GoZiply Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About GoZiply
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-gray-700">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to GoZiply
          </h2>
          <p>
            GoZiply is a Canadian online platform dedicated to seamlessly
            connecting skilled experts with clients who need their services. Our
            mission is simple: connect experts with the people who need their
            skills.
          </p>
        </div>

        {/* Story */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            The GoZiply Story: Why We Exist
          </h2>
          <p>
            Life is busy. Whether it's a home repair, tech support, creative
            work, or professional advice, finding reliable help shouldn’t be
            complicated. That’s where GoZiply comes in.
          </p>
          <p className="mt-3">
            We built GoZiply.net as a self-advertising platform to solve two
            major problems:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              For clients: the frustration of finding trustworthy experts.
            </li>
            <li>
              For experts: the struggle to be discovered by the right audience.
            </li>
          </ul>
          <p className="mt-3">
            Like a zipper joining two sides perfectly, GoZiply creates smooth,
            efficient, and valuable connections that help people get things done
            and help businesses grow.
          </p>
        </div>

        {/* For Clients */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            For Our Clients: Find Your Expert, Hassle-Free
          </h2>
          <p>
            <strong>Reclaim Your Time:</strong> Stop wasting hours searching.
            Our platform offers instant access to a large, organized catalog of
            qualified experts across 50+ categories.
          </p>
          <p className="mt-2">
            <strong>The Power of Choice:</strong> View detailed profiles,
            compare experience, and pick the perfect expert for your needs and
            budget.
          </p>
          <p className="mt-2">
            <strong>Completely Free to Use:</strong> Finding experts on GoZiply
            costs nothing. You only pay the expert directly for their service.
          </p>
        </div>

        {/* For Experts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            For Our Experts: Showcase Your Skills
          </h2>
          <p>
            GoZiply is your digital storefront. Create a strong online presence
            that helps you connect with real clients.
          </p>
          <p className="mt-2">
            <strong>Promote Yourself Your Way:</strong> Build a detailed profile
            with your skills, portfolio, certifications, and social media links
            (Facebook, Instagram, YouTube).
          </p>
          <p className="mt-2">
            <strong>Reach Active Clients:</strong> Be discovered by people who
            are already searching for the services you offer.
          </p>
          <p className="mt-2">
            Can’t find your category? Contact us — we’re constantly expanding
            our platform.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Commitment to You
          </h2>
          <p>
            At GoZiply, we aim to build a trustworthy, transparent, and
            efficient platform. We encourage all users to review our Privacy
            Policy to understand how we protect your personal data.
          </p>
        </div>

        {/* Join */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Join the GoZiply Community
          </h2>
          <p>Let’s build, create, and solve things together.</p>
        </div>
      </section>
    </div>
  );
}
