const colleges = [
  {
    rank: 1,
    name: "Virginia Tech",
    address: "800 Drillfield Dr, Blacksburg, VA 24061",
    website: "https://www.vt.edu",
    maps: "https://maps.google.com?q=800+Drillfield+Dr,+Blacksburg,+VA+24061",
    image: "vt.png"
  },
  {
    rank: 2,
    name: "New Jersey Institute of Technology",
    address: "323 Dr Martin Luther King Jr Blvd, Newark, NJ 07102",
    website: "https://www.njit.edu",
    maps: "https://maps.google.com?q=323+Dr+Martin+Luther+King+Jr+Blvd,+Newark,+NJ+07102",
    image: "njit.png"
  },
  {
    rank: 3,
    name: "Georgia Institute of Technology",
    address: "225 North Ave NW, Atlanta, GA 30332",
    website: "https://www.gatech.edu",
    maps: "https://maps.google.com?q=225+North+Ave+NW,+Atlanta,+GA+30332",
    image: "gt.png"
  },
  {
    rank: 4,
    name: "Rochester Institute of Technology",
    address: "1 Lomb Memorial Dr, Rochester, NY 14623",
    website: "https://www.rit.edu",
    maps: "https://maps.google.com?q=1+Lomb+Memorial+Dr,+Rochester,+NY+14623",
    image: "rit.png"
  },
  {
    rank: 5,
    name: "Stevens Institute of Technology",
    address: "1 Castle Point Terrace, Hoboken, NJ 07030",
    website: "https://www.stevens.edu",
    maps: "https://maps.google.com?q=1+Castle+Point+Terrace,+Hoboken,+NJ+07030",
    image: "stevens.jpg"
  }
];

const listGroup = document.querySelector(".list-group");
listGroup.innerHTML = "";

colleges.forEach(college => {
  const cardHTML = `
    <div class="list-group-item college-card">
      <div class="row">
        <div class="col-2">
          <img class="college-image" src="${college.image}" alt="${college.name}">
        </div>
        <div class="col-7 college-info">
          <h5>${college.rank}. ${college.name}</h5>
          <p><strong>Address:</strong> ${college.address}</p>
          <p><strong>Website:</strong>
            <a href="${college.website}" target="_blank">${college.website}</a>
          </p>
          <p><strong>Google Maps:</strong>
            <a href="${college.maps}" target="_blank">View on Google Maps</a>
          </p>
        </div>
      </div>
    </div>
  `;

  listGroup.insertAdjacentHTML("beforeend", cardHTML);
});
