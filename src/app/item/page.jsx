import React from "react";
import ItemCard from "../component/itemCard/page";

const getItems = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 3600 }, // Optional: Next.js revalidation strategy
    });
    if (!res.ok) throw new Error("Failed to fetch items");
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const Page = async () => {
  const Items = await getItems();

  return (
    <main className="w-full min-h-screen py-6 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        
        {/* Header Section */}
        <header className="w-full flex flex-col justify-start mb-6 md:mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            THE LIBRARY
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </header>

        {/* Responsive Grid Section */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {Array.isArray(Items) && Items.length > 0 ? (
            Items.map((item) => (
              <ItemCard key={item.id || item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No items found in the library.
            </p>
          )}
        </section>

      </div>
    </main>
  );
};

export default Page;