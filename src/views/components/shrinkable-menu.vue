<template>
    <div class="ivu-shrinkable-menu">
        <sidebar-menu
            :menu-list="menuList"
            :open-names="openNames"
            @on-change="handleChange"
        ></sidebar-menu>
    </div>
</template>

<script>
import sidebarMenu from './siderbar_menu.vue';
import util from '../../libs/util';
export default {
    name: 'shrinkableMenu',
    components: {
        sidebarMenu,
    },
    props: {
        menuList: {
            type: Array,
            required: true
        },
        beforePush: {
            type: Function
        },
        openNames: {
            type: Array
        }
    },
    computed: {

    },
    methods: {
      handleChange (name) {
            let willpush = true;
            if (this.beforePush !== undefined) {
                if (!this.beforePush(name)) {
                    willpush = false;
                }
            }
            if (willpush) {
                this.$router.push({
                    name: name
                });
            }
            this.$emit('on-change', name);
        }
    }
};
</script>
