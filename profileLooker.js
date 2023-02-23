document.addEventListener("DOMContentLoaded", function() {
    const profiles = [
      {
        code: 123,
        name: "John Doe",
        age: 25,
        likes: "Hiking, reading, playing guitar",
        dislikes: "Crowded places, spicy food",
        bio: "I'm a software engineer who enjoys spending time outdoors and playing music.",
      },
      {
        code: 456,
        name: "Jane Smith",
        age: 30,
        likes: "Traveling, trying new restaurants, watching movies",
        dislikes: "Early mornings, cold weather",
        bio: "I'm a marketing professional who loves exploring new places and trying new foods.",
      },
      {
        code: 789,
        name: "Bob Johnson",
        age: 40,
        likes: "Fishing, woodworking, gardening",
        dislikes: "Loud noises, big crowds",
        bio: "I'm a retired firefighter who enjoys spending time in my workshop and working on my garden.",
      },
      {
        code: 246,
        name: "Alice White",
        age: 28,
        likes: "Dancing, painting, watching TV shows",
        dislikes: "Waking up early, spicy food",
        bio: "I'm a graphic designer who loves expressing my creativity in many forms.",
      },
    ];
    
    document.getElementById("profile").onclick = function generateProfile() {
      const nameInput = document.getElementById("name");
      const codeInput = document.getElementById("code");
      const profileContainer = document.getElementById("profile-container");
    
      // get input values
      const name = nameInput.value;
      const code = parseInt(codeInput.value);
    
      // find matching profile
      const profile = profiles.find((p) => p.code === code);
    
      // if profile is not found, display error message
      if (!profile) {
        profileContainer.innerHTML = `<p>No profile found with code ${code}.</p>`;
        return;
      }
    
      // if name is provided and does not match the profile name, display error message
      if (name && name !== profile.name) {
        profileContainer.innerHTML = `<p>Incorrect name or code provided.</p>`;
        return;
      }
    
      // display profile information
      const profileInfo = `
        <h2>${profile.name}</h2>
        <p><strong>Age:</strong> ${profile.age}</p>
        <p><strong>Likes:</strong> ${profile.likes}</p>
        <p><strong>Dislikes:</strong> ${profile.dislikes}</p>
        <p><strong>Bio:</strong> ${profile.bio}</p>
      `;
      profileContainer.innerHTML = profileInfo;
    }
  });
  