console.log("Task_Gallery.js loaded");
document.addEventListener('DOMContentLoaded', () => {
  const buttonHTML = `
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button class="bg-gray-900 bg-opacity-90 p-2 rounded-full text-white hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
      <button class="bg-gray-900 bg-opacity-90 p-2 rounded-full text-white hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
    </div>
  `;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.insertAdjacentHTML('beforeend', buttonHTML);
  });

  const searchedItem = document.querySelector("#Search");
  if (searchedItem) {
    searchedItem.addEventListener('click', () => {
      const heading = document.querySelector("#searched_headings");
      const input = document.querySelector("#searched_item");
      if (heading && input) {
        heading.textContent = input.value || "Everything";
        heading.style.display = "block";
      }
    });
  }
});


