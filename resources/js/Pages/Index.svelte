<script>
    export let title;
    let count = 0;

    function handleClick() {
        count += 1;
    }
</script>

<div class="flex flex-col items-center text-center space-y-4">
    <h1 class="block mt-4 font-bold text-4xl">{title}</h1>
    <button
        class="bg-red-500 rounded-lg p-2 text-white font-bold"
        on:click={handleClick}
    >
        Count: {count}
    </button>
</div>
