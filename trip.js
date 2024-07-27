<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plan Your Trip - Traverse</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet"> <!-- AOS CSS -->
</head>

<body class="bg-gray-100">

    <!-- Header Section -->
    <header class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-gray-800">Traverse</div>
            <nav class="space-x-4">
                <a href="./index.html" target="_blank" class="text-gray-600 hover:text-blue-500">Home</a>
                <a href="./Destination.html" target="_blank" class="text-gray-600 hover:text-blue-500">Destinations</a>
                <a href="#" class="text-blue-500 font-semibold">Plan Your Trip</a>
                <a href="contact.html" target="_blank" class="text-gray-600 hover:text-blue-500">Contact</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-96" style="background-image: url('./bg1.webp');">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto px-6 py-24 relative z-10 text-center">
            <h1 class="text-6xl font-bold text-white" data-aos="fade-up" data-aos-duration="1000">Plan Your Dream Trip</h1>
            <p class="text-xl text-gray-200 mt-4" data-aos="fade-up" data-aos-duration="1200">Let us help you create unforgettable memories.</p>
        </div>
    </section>

    <!-- Plan Your Trip Section -->
    <section class="container mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center" data-aos="fade-down" data-aos-duration="1000">Plan Your Trip</h2>
        <div class="bg-white rounded-lg shadow-md p-8" data-aos="fade-up" data-aos-duration="1200">
            <form action="#" method="POST">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="mb-4">
                        <label for="destination" class="block text-gray-700 font-bold mb-2">Destination</label>
                        <input type="text" id="destination" name="destination"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="start-date" class="block text-gray-700 font-bold mb-2">Start Date</label>
                        <input type="date" id="start-date" name="start-date"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="end-date" class="block text-gray-700 font-bold mb-2">End Date</label>
                        <input type="date" id="end-date" name="end-date"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="budget" class="block text-gray-700 font-bold mb-2">Budget</label>
                        <input type="number" id="budget" name="budget"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
                <div class="mb-4">
                    <label for="preferences" class="block text-gray-700 font-bold mb-2">Preferences</label>
                    <textarea id="preferences" name="preferences"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"></textarea>
                </div>
                <div class="text-right">
                    <button type="submit"
                        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Submit</button>
                </div>
            </form>
        </div>
    </section>

    <!-- Featured Trips Section -->
    <section class="container mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center" data-aos="fade-down" data-aos-duration="1000">Featured Trips</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Trip Card 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right" data-aos-duration="1200">
                <img src="./beach.jpeg" alt="Beach Trip" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800">Beach Getaway</h3>
                    <p class="text-gray-600 mt-2">Relax on the pristine beaches and enjoy the sun.</p>
                </div>
            </div>
            <!-- Trip Card 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right" data-aos-duration="1300">
                <img src="./mount.jpeg" alt="Mountain Trip" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800">Mountain Adventure</h3>
                    <p class="text-gray-600 mt-2">Explore the majestic mountains and breathe fresh air.</p>
                </div>
            </div>
            <!-- Trip Card 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right" data-aos-duration="1400">
                <img src="./city.jpeg" alt="City Trip" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800">City Excursion</h3>
                    <p class="text-gray-600 mt-2">Discover the vibrant city life and cultural landmarks.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold mb-6 text-center" data-aos="fade-down" data-aos-duration="1000">What Our Clients Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Testimonial 1 -->
                <div class="bg-gray-700 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-duration="1200">
                    <p class="text-gray-300 mb-4">"An unforgettable experience! Everything was perfectly organized and we had a fantastic time."</p>
                    <h4 class="font-bold">Aoun Shah</h4>
                </div>
                <!-- Testimonial 2 -->
                <div class="bg-gray-700 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-duration="1300">
                    <p class="text-gray-300 mb-4">"The best vacation we ever had. Highly recommend Traverse for your travel planning needs!"</p>
                    <h4 class="font-bold">Abdullah Shakil</h4>
                </div>
                <!-- Testimonial 3 -->
                <div class="bg-gray-700 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-duration="1400">
                    <p class="text-gray-300 mb-4">"Exceptional service and attention to detail. Our trip was seamless and enjoyable."</p>
                    <h4 class="font-bold">Khubaib Bin Waqar</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-white shadow-md mt-12 ">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <p class="text-gray-600">&copy; 2024 Traverse. All rights reserved.</p>
            <nav class="space-x-4">
                <a href="#" class="text-gray-600 hover:text-blue-500">Privacy Policy</a>
                <a href="#" class="text-gray-600 hover:text-blue-500">Terms of Service</a>
            </nav>
           
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script> <!-- AOS JS -->
    <script>
        AOS.init(); // Initialize AOS
    </script>
</body>

</html>
