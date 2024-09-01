const headline = document.querySelector('#head');
const button = document.getElementById('button');
const display = document.getElementById('categoryList');


const news =[
    {
        id: 1,
        date: "2024-08-15",
        location: "India",
        description: "Severe floods in Mumbai caused widespread damage, displacing thousands of residents."
    },
    {
        id: 2,
        date: "2024-07-30",
        location: "India",
        description: "Cyclone Nisarga made landfall near Gujarat, leading to heavy rainfall and strong winds."
    },
    {
        id: 3,
        date: "2024-09-05",
        location: "India",
        description: "Earthquake of magnitude 6.1 struck near the Himalayan region, causing tremors in several northern states."
    },
    {
        id: 4,
        date: "2024-09-01",
        location: "India",
        description: "Landslide in Kerala following heavy monsoon rains, blocking key highways and causing casualties."
    },
    {
        id: 5,
        date: "2024-08-25",
        location: "India",
        description: "Heatwave in northern India led to soaring temperatures, impacting daily life and agriculture."
    }
]

// Define the categories with descriptions
const category = [1, 2, 3, 4, 5];

// Event listener

    button.addEventListener('click', () => {
        // Check if headline exists and get the value from the input field
        const input_str = headline ? headline.value : '';  // Use optional chaining to handle null scenarios
        console.log(input_str); // This will log the value to the console
    
        var impact_category;
    
        // Tokenize the input string into words and convert to lowercase
        var words = input_str.toLowerCase().split(' ');
    
        // Iterate over each word to determine the impact category
        for (var word of words) {
            if (['power', 'small', 'minor', 'minimal'].includes(word)) {
                impact_category = category[0];
                break; // Exit loop once a match is found
            } else if (['landslide', 'landslides', 'flood', 'floods', 'accident', 'accidents'].includes(word)) {
                impact_category = category[1];
                break; // Exit loop once a match is found
            } else if (['earthquake', 'earthquakes', 'cyclone', 'cyclones', 'fire', 'fires'].includes(word)) {
                impact_category = category[2];
                break; // Exit loop once a match is found
            } else if (['massive', 'tsunami', 'tsunamis', 'super', 'drought', 'droughts', 'pandemic', 'pandemics'].includes(word)) {
                impact_category = category[3];
                break; // Exit loop once a match is found
            } else {
                impact_category = category[4];
            }
        }
    
        // Log the determined impact category
        console.log('Impact Category:', impact_category);
    });

// else{
//     console.log("kya fukk ke aya hai be");
// }

// Correct event listener syntax
// button.addEventListener('click', () => {
//   const inputStr = headline?.value || ''; // Use optional chaining and default value
//   console.log(inputStr);

//   let impactCategory = categories[4]; // Default to unknown impact

//   const words = inputStr.toLowerCase().split(' ');

//   // Iterate over each word and break out of the loop when a match is found
//   for (const word of words) {
//     if (['power', 'small', 'minor', 'minimal'].includes(word)) {
//       impactCategory = categories[0];
//       break;
//     } else if (['landslide', 'landslides', 'flood', 'floods', 'accident', 'accidents'].includes(word)) {
//       impactCategory = categories[1];
//       break;
//     } else if (['earthquake', 'earthquakes', 'cyclone', 'cyclones', 'fire', 'fires'].includes(word)) {
//       impactCategory = categories[2];
//       break;
//     } else if (['massive', 'tsunami', 'tsunamis', 'super', 'drought', 'droughts', 'pandemic', 'pandemics'].includes(word)) {
//       impactCategory = categories[3];
//       break;
//     }
//   }

//   console.log('Impact Category:', impactCategory.description); // Log the category description
// });

