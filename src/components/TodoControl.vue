<template>
  <aside class="mb-4 border border-solid rounded">
    <div
      class="hover:bg-primary-moonlight cursor-pointer p-2"
      @click="handleOpen"
    >
      💬 Click To {{ !isOpen ? "Open" : "Close" }} Category Setting
    </div>

    <nav class="flex flex-row w-full">
      <div
        :class="{ isOpenClass: !isCreate }"
        class="w-1/2 hover:bg-primary-lightmoonlight p-2 cursor-pointer drawBorder drawMiddleBorder rounded"
        @click="toggleTab('create')"
      >
        Create
      </div>
      <div
        :class="{ isOpenClass: !isUpdate }"
        class="w-1/2 hover:bg-primary-lightmoonlight p-2 cursor-pointer rounded drawBorder"
        @click="toggleTab('update')"
      >
        Update
      </div>
    </nav>

    <main v-if="isCreate && isOpen" class="w-full p-1">
      <div class="flex flex-row">
        <label
          class="w-1/2 p-1 flex justify-center items-center"
          for="cateColor"
          >Choose Color</label
        >
        <div class="w-1/2 p-1">
          <input
            type="color"
            id="cateColor"
            name="cateColor"
            class="h-6 w-9"
            v-model="cateColor"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <label
          class="w-1/2 p-1 flex justify-center items-center"
          for="newCateTitle"
          >Add Title</label
        >
        <div class="w-1/2 p-1">
          <input
            type="text"
            v-model.trim="newCate"
            name="newCateTitle"
            id="newCateTitle"
            class="w-full h-8 p-6 text-base rounded border border-solid border-primary-lightgray focus:outline-none"
            placeholder="Add New Category"
            @keyup.enter="addCate()"
          />
        </div>
      </div>
      <footer class="flex justify-between p-1 btns">
        <h5 class="flex justify-center items-center text-primary-darkgray pl-2">
          {{ infoMsg }}
        </h5>
        <font-awesome-icon icon="check" class="add" @click="addCate()" />
      </footer>
    </main>

    <main v-if="isUpdate && isOpen" class="w-full p-1">
      <!-- Show Existing Categories-->
      <div
        class="flex flex-row justify-center items-center p-1"
        v-for="(item, index) in this.categories"
        :key="index"
      >
        <label
          class="hidden w-1/2 p-1 md:flex lg:flex justify-center items-center"
          for="modifyCateColor"
          >Modify Color</label
        >
        <input
          type="color"
          id="modifyCateColor"
          name="modifyCateColor"
          class="h-6 w-9 pl-1"
          :value="item.backgroundColor"
          @change="changeExistingCate(item, $event, 'color')"
        />
        <label
          class="hidden w-1/2 p-1 md:flex lg:flex justify-center items-center"
          for="categories"
          >Rename Title</label
        >
        <input
          type="text"
          class="pl-2 w-full h-6 p-6 text-base rounded border border-solid border-primary-lightgray focus:outline-none ml-2"
          v-model.trim="item.title"
          placeholder="change existing category"
          @keyup.enter="changeExistingCate(item, $event, 'color')"
        />
        <div class="btns flex flex-row">
          <font-awesome-icon
            v-if="isUpdate"
            icon="edit"
            class="edit"
            @click="handleCateEdit(item)"
          />

          <font-awesome-icon
            v-if="isUpdate"
            icon="trash"
            class="delete"
            @click="handleCateDelete(item)"
          />
        </div>
      </div>
      <h5 class="flex justify-center items-center text-primary-darkgray pl-2">
        {{ infoMsg }}
      </h5>
    </main>
  </aside>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";

interface AppState {
  isOpen: boolean;
  isCreate: boolean;
  isUpdate: boolean;
  sliceNum: Number;
  changedCate: string;
  newCate: string;
  cateColor: string;
  categories: Category[];
  infoMsg: string;
}

interface Category {
  title: string;
  value: number;
  backgroundColor: string;
}

export default Vue.extend({
  props: [],
  data() {
    const initialState: AppState = {
      isOpen: false,
      isCreate: true,
      isUpdate: false,
      sliceNum: 0,
      changedCate: "",
      newCate: "",
      cateColor: "#e66465",
      categories: this.$store.state.categories,
      infoMsg: ""
    };
    return initialState;
  },
  methods: {
    handleOpen() {
      this.isOpen = !this.isOpen;
    },
    toggleTab(param: string) {
      if (param === "create") {
        this.isCreate = true;
        this.isUpdate = false;
      } else {
        this.isCreate = false;
        this.isUpdate = true;
      }
    },
    addCate() {
      const cateItem = this.newCate;
      if (!cateItem) return;
      const newCateItem = {
        title: cateItem,
        color: this.cateColor
      };
      this.$store.commit("addNewCate", newCateItem);
      this.newCate = "";
      this.infoMsg = "카테고리가 추가되었습니다.";
      setTimeout(() => {
        this.infoMsg = "";
      }, 2000);
    },
    changeCateInfo(event: any) {
      const currentTitle = event.target.value;
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].title === currentTitle) {
          this.sliceNum = i;
        }
      }
    },
    changeExistingCate(item: Category, event: any, param: string) {
      const cateIndex = this.categories.indexOf(item);
      let msg = "색상";
      if (param === "color") {
        this.$store.commit("modifyCate", {
          backgroundColor: event.target.value,
          index: cateIndex
        });
      } else {
        if (event.target.value !== "") {
          this.$store.commit("modifyCate", {
            title: event.target.value,
            index: cateIndex
          });
          msg = "타이틀";
        }
      }
      this.infoMsg = `카테고리 ${msg}이 변경되었습니다.`;
      setTimeout(() => {
        this.infoMsg = "";
      }, 2000);
    },
    handleCateEdit(item: Category) {
      const cateIndex = this.categories.indexOf(item);
      if (this.changedCate !== "") {
        this.$store.commit("modifyCate", {
          title: this.changedCate,
          index: cateIndex
        });
      }
      this.infoMsg = "카테고리 타이틀이 변경되었습니다.";
      setTimeout(() => {
        this.infoMsg = "";
      }, 2000);
    },
    handleCateDelete(item: Category) {
      const cateIndex = this.categories.indexOf(item);
      if (cateIndex === this.categories.length - 1) this.sliceNum = 0;
      this.$store.commit("deleteCate", cateIndex);
      this.infoMsg = "카테고리가 삭제되었습니다.";
      setTimeout(() => {
        this.infoMsg = "";
      }, 2000);
    }
  }
});
</script>
