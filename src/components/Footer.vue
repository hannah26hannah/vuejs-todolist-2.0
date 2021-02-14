<template>
  <footer
    class="flex flex-col justify-center items-center md:flex-row lg:flex-row md:justify-between lg:justify-between"
  >
    <div
      class="flex flex-col items-center p-0 md:pl-4 lg:pl-4 md:flex-row lg:flex-row"
    >
      <h6>&copy; {{ currentYear }}</h6>
      <h6 class="md:ml-1 lg:ml-1">hannah26hannah</h6>
    </div>

    <ul
      class="flex flex-row w-2/5 md:w-1/5 lg:w-1/5 justify-around items-center pr-4 md:mr-4 lg:mr-4"
    >
      <a href="https://github.com/hannah26hannah"
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon
            :icon="['fab', 'github-alt']"
            class="cursor-pointer"
          /></li
      ></a>
      <a href="mailto: guaranteed.by.prismo@gmail.com"
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon icon="envelope-open" class="cursor-pointer" />
        </li>
      </a>
      <a href="https://hannah26hannah.github.io/"
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon icon="book-reader" class="cursor-pointer" />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/jeongwon-yoo/"
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="cursor-pointer"
          />
        </li>
      </a>
      <a href="https://uiyoji-journal.tistory.com/"
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon
            :icon="['fab', 'blogger-b']"
            class="cursor-pointer"
          />
        </li>
      </a>
      <a href=""
        ><li class="hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md">
          <font-awesome-icon icon="book-reader" class="cursor-pointer" />
        </li>
      </a>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
interface AppState {
  currentYear: Number;
}
export default Vue.extend({
  data() {
    const initialState: AppState = {
      currentYear: new Date().getFullYear()
    };
    return initialState;
  }
});
</script>

<style></style>
