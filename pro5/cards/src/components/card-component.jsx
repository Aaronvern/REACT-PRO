import React from 'react'

export function Card({name},{model}) {
  return (
   <>
   <div class="w-[300px] rounded-md border">
  <img
    src='data:image/jpeg;base64,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'
    alt="Laptop"
    class="h-[200px] w-full rounded-t-md object-cover"
  />
  <div class="p-4">
    <h1 class="inline-flex items-center text-lg font-semibold">
      About {name}  {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>
    <p class="mt-3 text-sm text-gray-600">
     MODEL: {model}
    </p>
    <div class="mt-4">
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Macbook
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Apple
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Laptop
      </span>
    </div>
    <button
      type="button"
      class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div>

   </>
    
  )
}
