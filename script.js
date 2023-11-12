// Function to adjust price and color based on variation
function adjustVariation() {
  $("#size").change(function () {
    const selectedSize = $(this).val()

    // Example: Update price based on the selected size
    if (selectedSize === "small") {
      $(".product-details p").text("$9.99")
    } else if (selectedSize === "medium") {
      $(".product-details p").text("$12.99")
    } else if (selectedSize === "large") {
      $(".product-details p").text("$15.99")
    }

    // Example: Change color based on the selected size
    if (selectedSize === "small") {
      $("body").css("background-color", "lightblue")
    } else if (selectedSize === "medium") {
      $("body").css("background-color", "lightgreen")
    } else if (selectedSize === "large") {
      $("body").css("background-color", "lightyellow")
    }
  })
}

// Function to manage adding product to cart and stock availability
function manageCart() {
  $("#add-to-cart").click(function () {
    const selectedSize = $("#size").val()
    if (selectedSize === "large") {
      alert("Out of stock. Please choose a different size.")
    } else {
      alert("Product added to cart successfully!")
    }
  })
}

// Function to manage item quantity
function manageQuantity() {
  $("#quantity").change(function () {
    // Increment/decrement buttons (Functionality 6)
    // You can implement the logic for quantity handling here
  })
}

// Function to handle image gallery functionality
function handleImageGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item")
  const imageGallery = document.querySelector(".image-gallery")

  // Function to display selected image in the gallery
  function displayImage(event) {
    const selectedImage = event.target
    const mainImage = document.createElement("img")
    mainImage.src = selectedImage.src
    mainImage.alt = selectedImage.alt

    // Clear previous image
    while (imageGallery.firstChild) {
      imageGallery.removeChild(imageGallery.firstChild)
    }

    // Display the selected image as the main image
    imageGallery.appendChild(mainImage)
  }

  // Attach event listeners to all images in the gallery
  galleryItems.forEach((item) => {
    item.addEventListener("click", displayImage)
  })
}

// Function to show a modal
function showModal(message) {
  // Code to display a modal with the message (use your preferred modal implementation)
  alert(message) // For simplicity, using an alert as a modal
}

// Call the necessary functions when the document is ready
$(document).ready(function () {
  handleImageGallery()
  adjustVariation()
  manageCart()
  manageQuantity()
  responsiveDesign() // This might be defined elsewhere in your code
})
