import { ref, watch } from "vue";

export function useImageUpload() {
    const images = ref("");
    const imageFile = ref("");
    const imageUrl = ref("");

    function handleImageSelected(event) {
        if (event.target.files && event.target.files[0]) {
            imageFile.value = event.target.files[0];
            console.log(imageFile.value);
        }
      }
      watch(imageFile, (imageFile) => {
          if (!(imageFile instanceof File)){
              return;
          }
        let fileReader = new FileReader();
  
        fileReader.readAsDataURL(imageFile);
  
        fileReader.addEventListener("load", () => {
            imageUrl.value = fileReader.result;
        });
      });

      return {
          // imageUrl,
          imageFile, handleImageSelected
      };
}