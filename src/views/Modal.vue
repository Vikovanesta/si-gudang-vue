<script setup lang="ts">
import { ref } from 'vue'


const open = ref(false)
const openModal2 = ref(false)
</script>

<template>

  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Modal
    </h3>
    <button
      class="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      @click="open = true"
    >
      Open Modal
    </button>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="open = false"
      />

      <div
        class="z-50 w-2/3 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        
        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <p class="text-xl font-bold">
             Tambah Include
            </p>
            <div class="z-50 flex gap-2 cursor-pointer modal-close" >
              
              <button
              class=" px-7 py-1 text-sm border-[#FFA216] border text-[#FFA216] bg-transparent rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
              @click="open = false"
            >
              Batal
            </button>
              <button
              class=" px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
              @click="open = false"
            >
              Selesai
            </button>
            </div>
          </div>
          <form>
            <div>
                    <label for="itembaru" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Tambah Item Baru</label>
                    <input type="text" id="itembaru" class="w-full rounded-lg border border-gray-300" placeholder="Item" required>
                </div>
          </form>
          
        </div>
      </div>
    </div>
    </div>
    <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Modal Lain dengan Konten Berbeda
    </h3>
    <button
      class="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      @click="openModal2 = true"
    >
      Buka Modal Lainnya
    </button>

    <div
      :class="`modal ${
        !openModal2 && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="openModal2 = false"
      />

      <div
        class="z-50 w-2/3 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container "
      >
        <div class="px-6 py-4 text-left modal-content">
          <div class="flex items-center justify-between pb-3">
            <p class="text-xl font-bold">
              Modal Lain dengan Konten Berbeda
            </p>
            <div class="z-50 flex gap-2 cursor-pointer modal-close">
              <button
                class="px-7 py-1 text-sm border-[#FFA216] border text-[#FFA216] bg-transparent rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                @click="openModal2 = false"
              >
                Batal
              </button>
              <button
                class="px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                @click="openModal2 = false"
              >
                Selesai
              </button>
            </div>
          </div>
          <form>
            <div>
              <label for="kontenlain" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Konten Lain:</label>
              <textarea id="kontenlain" class="w-full rounded-lg border border-gray-300" placeholder="Konten lain" required></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  
</template>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>




