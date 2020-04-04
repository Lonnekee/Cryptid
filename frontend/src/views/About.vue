<template>
    <div class="wrapper">
        <div class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <p>
                        About
                    </p>
                    <p>
                        Copyright (c) 2018
                        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        props: {
            header: {
                type: String,
                default: require("@/assets/img/profile_city.jpg")
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        }
    }
</script>

<style scoped>

</style>