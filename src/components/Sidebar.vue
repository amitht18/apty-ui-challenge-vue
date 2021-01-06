<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <div class="logo"></div>
            <ul>
                <li class="icon home active"></li>
                <li class="icon briefcase"></li>
                <li class="icon compass"></li>
                <li class="icon notification">
                    <div class="notification-dot"></div>
                </li>
                <li class="icon settings"></li>
            </ul>
        </div>
        <div class="sidebar-bottom">
            <ul>
                <li class="icon logout"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import "./../app.scss";
    export default {
        
    }
</script>

<style lang="scss" scoped>
.sidebar {
    width: 100px;
    height: calc(100vh - 40px);
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: var(--border-radius-20);

    ul li {
        list-style-type: none;
    }

}
</style>
