<script lang="ts">

</script>

<style>

    .navBar{
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
    }

    .nav-item{
        color: white;
        white-space: nowrap;
    }

    .nav-text{
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    .nav-separator{
        height: 1px;
        background-color: white;
        flex-grow: 1;
        margin: 0 1.5rem;
    }
</style>

<nav class="navBar">
    <div class="nav-item">
        <span class="nav-text"> ELEMENT 1 </span>
    </div>

    <div class="nav-separator"></div>
    <div class="nav-item">
        <span class="nav-text"> ELEMENT 2 </span>
    </div>

    <div class="nav-separator"></div>
    <div class="nav-item">
        <span class="nav-text"> ELEMENT 3 </span>
    </div>

</nav>