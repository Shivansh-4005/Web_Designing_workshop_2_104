// Product data
const products = [
  {
    name: "Laptop",
    description: "High performance laptop",
    price: "₹50,000",
    badge: "New",
    badgeClass: "bg-success",
    details: "16GB RAM, SSD, Fast performance",
    img: "download.jpg"
  },
  {
    name: "Mobile",
    description: "Latest smartphone",
    price: "₹30,000",
    badge: "Sale",
    badgeClass: "bg-danger",
    details: "High camera quality smartphone",
    img: "download (1).jpg"
  },
  {
    name: "Headphones",
    description: "Noise cancelling",
    price: "₹5,000",
    badge: "New",
    badgeClass: "bg-success",
    details: "Best sound quality with bass",
    img: "download (2).jpg"
  }
];

// Render products dynamically
function renderProducts() {
  const row = document.getElementById("product-row");
  row.innerHTML = "";
  products.forEach((p, index) => {
    row.innerHTML += `
      <div class="col-lg-4 col-md-6 col-12 mb-4">
        <div class="card">
          <img src="${p.img}" class="card-img-top img-fluid" alt="${p.name}">
          <div class="card-body">
            <h5>${p.name}</h5>
            <p>${p.description}</p>
            <h6>${p.price} <span class="badge ${p.badgeClass}">${p.badge}</span></h6>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${index}">View Details</button>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="modal${index}">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"><h5>${p.name} Details</h5><button class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body">${p.details}</div>
            <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>
          </div>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);
