const articles = [
    {
        id: "1",
        title: "Amazing Ocean Facts",
        date: "May 8, 2025",
        image: "images/fact1.jpg",
        content: [
            "The ocean covers more than 70% of Earth's surface and contains about 97% of all water on the planet. The deepest known point is the Challenger Deep in the Mariana Trench, at approximately 36,200 feet deep.",
            "If Mount Everest were placed in the Mariana Trench, its peak would still be more than a mile underwater! Despite this vastness, humans have only explored about 5% of the ocean.",
            "The ocean is home to an estimated 700,000 to 1 million species, with new ones being discovered regularly. Scientists believe there could be millions more species yet to be discovered in the deep ocean.",
            "The blue whale, which lives in the ocean, is the largest animal to have ever lived on Earth, even larger than the largest dinosaurs. These magnificent creatures can grow up to 100 feet long and weigh up to 200 tons.",
            "The Great Barrier Reef, located off the coast of Australia, is the largest living structure on Earth. It can be seen from space and is home to thousands of species of fish, corals, and other marine organisms.",
            "The average depth of the ocean is about 12,100 feet, and the water pressure at the bottom of the Mariana Trench is more than 1,000 times the standard atmospheric pressure at sea level.",
            "The ocean helps regulate Earth's climate by absorbing carbon dioxide from the atmosphere. However, this has led to ocean acidification, which threatens marine ecosystems, especially coral reefs."
        ],
        tags: ["science", "nature", "animals", "ocean", "environment"],
        view_content: [
            "The ocean covers more than 70% of Earth's surface and contains about 97% of all water on the planet. The deepest known point is the Challenger Deep in the Mariana Trench, at approximately 36,200 feet deep."
        ]
    },
    {
        id: "2",
        title: "Space Exploration Wonders",
        date: "May 5, 2025",
        image: "images/fact2.jpg",
        content: [
            "The International Space Station orbits Earth at about 17,500 mph, completing one orbit every 90 minutes. This means astronauts on the ISS experience 16 sunrises and sunsets every day!",
            "The ISS is the largest human-made object in space and the largest satellite in low Earth orbit, visible to the naked eye from Earth. It has been continuously occupied since November 2000.",
            "The space station serves as a microgravity and space environment research laboratory where scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields.",
            "Mars, often called the Red Planet, is home to Olympus Mons, the largest volcano in our solar system. It stands about 13.6 miles (22 km) high, making it nearly three times the height of Mount Everest.",
            "The coldest place in our solar system isn't Pluto or Neptune – it's actually on our Moon. The permanently shadowed craters at the lunar poles have temperatures as low as -415°F (-248°C).",
            "Venus is often called Earth's sister planet because of their similar size and proximity to the Sun. However, Venus has an atmosphere 90 times denser than Earth's and surface temperatures hot enough to melt lead.",
            "Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape once it passes the event horizon. Despite their name, black holes are not empty space – they contain a tremendous amount of mass compressed into an extremely small area."
        ],
        tags: ["space", "astronomy", "science", "technology", "exploration"],
        view_content: [
            "The International Space Station orbits Earth at about 17,500 mph, completing one orbit every 90 minutes. This means astronauts on the ISS experience 16 sunrises and sunsets every day!"
        ]
    },
    {
        id: "3",
        title: "Ancient Egyptian Mysteries",
        date: "May 1, 2025",
        image: "images/fact3.jpg",
        content: [
            "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years until the completion of Lincoln Cathedral in England in 1311 AD.",
            "The Great Pyramid was built with an estimated 2.3 million stone blocks, each weighing between 2.5 to 15 tons. Despite being built around 2560 BCE, the pyramid was constructed with such precision that the four sides of the base have an average error of only 58 millimeters in length.",
            "Ancient Egyptians had sophisticated knowledge of mathematics, astronomy, and engineering. The pyramid's sides are perfectly aligned with the four cardinal directions with amazing accuracy.",
            "The ancient Egyptian civilization lasted for over 3,000 years, making it one of the longest-lasting civilizations in human history. It began around 3100 BCE with the unification of Upper and Lower Egypt and ended when it became a province of the Roman Empire in 30 BCE.",
            "Contrary to popular belief, it's unlikely that slaves built the pyramids. Evidence suggests they were constructed by skilled workers who were paid and well-fed. They lived in workers' villages near the construction sites.",
            "Hieroglyphics, the ancient Egyptian writing system, used over 700 distinct symbols. Knowledge of how to read hieroglyphics was lost for nearly 1,500 years until the discovery of the Rosetta Stone in 1799.",
            "Ancient Egyptians were one of the first civilizations to develop the concept of the afterlife and the judgment of souls. The Book of the Dead was a collection of spells and instructions designed to help the deceased navigate the afterlife."
        ],
        tags: ["history", "ancient", "civilization", "archaeology", "Egypt"],
        view_content: [
            "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years until the completion of Lincoln Cathedral in England in 1311 AD."
        ]
    },
    // --- New Fun Fact Blog Posts Below ---
    {
        id: "4",
        title: "The Secret Life of Plants",
        date: "April 28, 2025",
        image: "images/fact4.jpg",
        content: [
            "Plants can communicate with each other using chemical signals. When under attack by pests, some plants release chemicals to warn their neighbors, who then boost their own defenses.",
            "The world’s oldest living tree is a bristlecone pine in California, estimated to be over 4,800 years old.",
            "Some plants, like the Venus flytrap, are carnivorous and can snap shut in less than a second to trap insects.",
            "Bamboo is the fastest-growing plant on Earth, with some species capable of growing up to 35 inches in a single day.",
            "The corpse flower (Amorphophallus titanum) produces the largest unbranched inflorescence in the world and smells like rotting flesh to attract pollinators."
        ],
        tags: ["plants", "nature", "biology", "environment", "science"],
        view_content: [
            "Plants can communicate with each other using chemical signals. When under attack by pests, some plants release chemicals to warn their neighbors, who then boost their own defenses."
        ]
    },
    {
        id: "5",
        title: "Unusual Animal Superpowers",
        date: "April 20, 2025",
        image: "images/fact5.jpg",
        content: [
            "The axolotl, a Mexican salamander, can regenerate entire limbs, parts of its heart, and even sections of its brain.",
            "Turritopsis dohrnii, known as the 'immortal jellyfish', can revert its cells back to their earliest form and start its life cycle anew, potentially living forever.",
            "Pistol shrimp can snap their claws so fast it creates a bubble that reaches temperatures hotter than the surface of the sun, stunning prey with the shockwave.",
            "The mantis shrimp has the most complex eyes in the animal kingdom, able to see polarized light and up to 12 color channels (humans have only three).",
            "The mimic octopus can impersonate more than 15 different marine species, including lionfish, flatfish, and sea snakes, to avoid predators."
        ],
        tags: ["animals", "biology", "nature", "science", "weird"]
    },
    {
        id: "6",
        title: "Mind-Blowing Math Facts",
        date: "April 15, 2025",
        image: "images/fact6.jpg",
        content: [
            "A pizza that has radius 'z' and height 'a' has a volume of Pi × z × z × a (Pi*z*z*a) – so the formula for pizza is, literally, 'pizza'!",
            "There are infinitely many prime numbers, and the largest known prime has over 24 million digits.",
            "Zero is the only number that cannot be represented by Roman numerals.",
            "The number 1729 is known as the Hardy-Ramanujan number: it’s the smallest number expressible as the sum of two cubes in two different ways.",
            "If you shuffle a deck of cards properly, chances are that exact order has never existed before in history."
        ],
        tags: ["math", "numbers", "science", "fun", "logic"]
    },
    {
        id: "7",
        title: "Wonders of the Human Body",
        date: "April 10, 2025",
        image: "images/fact7.jpg",
        content: [
            "Your stomach gets a new lining every 3–4 days to prevent it from digesting itself.",
            "The human nose can detect over 1 trillion different scents.",
            "If uncoiled, the DNA in all your cells would stretch from the Earth to the Sun and back over 600 times.",
            "You are taller in the morning than at night because the cartilage in your spine compresses during the day.",
            "The strongest muscle in your body, relative to its size, is the masseter (jaw muscle)."
        ],
        tags: ["human body", "biology", "health", "science", "anatomy"]
    },
    {
        id: "8",
        title: "Fascinating World Records",
        date: "April 5, 2025",
        image: "images/fact8.jpg",
        content: [
            "The longest time anyone has held their breath underwater is 24 minutes and 37 seconds.",
            "The world’s largest snowflake on record was 15 inches wide and 8 inches thick, found in Montana in 1887.",
            "The hottest temperature ever recorded on Earth was 134°F (56.7°C) in Furnace Creek Ranch, California, in 1913.",
            "The largest living animal, the blue whale, can weigh as much as 200 tons – about the same as 33 elephants.",
            "The fastest land animal, the cheetah, can accelerate from 0 to 60 mph in just 3 seconds."
        ],
        tags: ["records", "world", "nature", "animals", "human"]
    },
    {
        id: "9",
        title: "Surprising Food Facts",
        date: "April 1, 2025",
        image: "images/fact9.jpg",
        content: [
            "Honey never spoils – archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
            "Bananas are berries, but strawberries are not.",
            "Cashews grow on the bottom of a fruit called a cashew apple, and are actually seeds, not nuts.",
            "Carrots were originally purple, not orange. The orange variety was cultivated in the Netherlands in the 17th century.",
            "Chocolate was once used as currency by the ancient Aztecs."
        ],
        tags: ["food", "history", "nature", "weird", "fun"]
    }
];

module.exports = articles;