<template>

  <button :class="[colorVariants]"  class="border border-solid py-2 px-5 rounded" >{{name}}</button>

</template>

<script>
export  default {
  name : 'Button',
  data(){
   return {
    count : this.status
   }
  },
  methods : {
    CountChange : function (){
      if (this.count<3) {
        this.count += 1
      }
    }
  },
  computed: {
    colorVariants() {
      if (this.color=='danger') {
        if (this.variantType=='outline'){
          return "border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
        }else {
          return "bg-red-500 text-white hover:bg-red-700";
        }

      }else if(this.color=='success'){

        if (this.variantType=='outline'){
          return "border-green-500 text-green-500 hover:bg-green-500 hover:text-white";

        }else {
          return "bg-green-500 text-white hover:bg-green-700";
        }

      }
      else if(this.color=='warning'){

        if (this.variantType=='outline'){
          return "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white";

        }else {
          return "bg-yellow-500 text-black hover:bg-yellow-700";
        }

      }

      else if(this.color=='portal'){

        if (this.variantType=='outline'){
          return "border-[#5DFF18] text-[#5DFF18] font-black text-2xl hover:bg-[#5DFF18] hover:text-black";
        }else {
          return "bg-[#5DFF18] text-black font-black text-2xl hover:bg-[#5DFF18]";
        }

      }

      else if(this.color=='pagition'){

        if (this.variantType=='outline'){
          return "border-[#5DFF18] m-2 text-[#5DFF18] font-black text-xl hover:bg-[#5DFF18] hover:text-black";
        }else {
          return "bg-[#5DFF18] m-2 text-black font-black text-xl hover:bg-[#5DFF18]";
        }

      }

      else {
        return "bg-zinc-800 text-white hover:bg-black";
      }

    }
  },
  props : ['name', 'test', 'status', 'color', 'variantType']
}
</script>