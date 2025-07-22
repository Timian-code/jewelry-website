# Jewelry Website

A beautiful, responsive website for showcasing handmade jewelry with a working contact form and dynamic product gallery.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dynamic Product Gallery** - JSON-powered catalog that's easy to update
- **Working Contact Form** - Customers can reach out directly via email
- **Modern Design** - Earth-tone color scheme with elegant typography
- **Mobile-First** - Optimized for all screen sizes

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Dynamic content loading from JSON
- **Netlify** - Hosting and form handling
- **Git/GitHub** - Version control

## 🚀 Live Demo

**Website:** [https://endearing-crostata-30b8d8.netlify.app](https://endearing-crostata-30b8d8.netlify.app)

## 📁 Project Structure

jewelry-website/
├── index.html # Homepage with hero section
├── css/styles.css # All styling
├── js/script.js # Dynamic product loading
├── data/products.json # Product catalog
├── images/ # Product and background images
└── pages/ # Additional pages
├── gallery.html # Product gallery
├── about.html # About page
├── contact.html # Contact form
└── success.html # Form success page


## 🎨 Design Features

- **Earth-tone color palette** (warm browns, sage greens, creams)
- **Google Fonts** - Inter for body text, Playfair Display for headings
- **Custom background image** on homepage
- **Professional product cards** with hover effects

## 📝 How to Update Products

1. Edit `data/products.json`
2. Add product images to `images/products/`
3. Update image paths in the JSON file
4. Commit and push to GitHub - site updates automatically!

## 📋 For the Business Owner - How to Add New Jewelry

### Adding New Products

1. **Take high-quality photos** of your jewelry (300x250px recommended)
2. **Add photos to the `images/products/` folder**
3. **Edit the `data/products.json` file:**

```json
{
  "id": 6,
  "name": "Your Jewelry Name",
  "description": "Beautiful description of the piece",
  "price": 75,
  "category": "rings",
  "image": "https://picsum.photos/300/250?random=6",
  "materials": ["sterling silver", "gemstone"],
  "size": "adjustable",
  "inStock": true
}

Product Fields Explained

    id - Unique number for each piece
    name - What customers will see as the title
    description - Detailed description of the jewelry
    price - Price in dollars (no $ symbol needed)
    category - "rings", "necklaces", "earrings", "bracelets"
    image - Photo URL or path to image file
    materials - List of materials used
    inStock - true if available, false if sold out

Quick Tips

    Keep descriptions engaging but concise
    Use high-quality photos - they make or break sales
    Update inStock to false when items sell
    Be consistent with categories for potential future filtering


👨‍💻 Author

Timian-code - GitHub

This was my first personal project, built to practice full-stack web development skills.