<!--
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-01-14 13:30:55
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-04-29 18:30:57
-->
<template>
  <svg
    aria-hidden="true"
    :class="iconClass"
    :width="size"
    :height="size"
    :color="color">
    <use :xlink:href="iconName" />
  </svg>
</template>
<!--
 * 使用:
 *   1.组件模版中使用
 *      [<svg-icon
 *            name="icon"
 *            size="100"
 *            color="red"
 *            svgClass="svg"></svg-icon>]
 * 注意:
 *    1.name      为svg图片名称，不需要扩展名 （必填）
 *    2.size      为svg高宽（默认1em）
 *    3.color     为svg颜色
 *    4.svgClass  为svg Class样式
-->
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    // icon 名称 必传
    name: { type: String, required: true },
    // 自定义class name
    svgClass: { type: String, default: '' },
    // size 大小
    size: { type: String, default: '16px' },
    // color 颜色
    color: { type: String, default: '' }
  },
  setup(props, ctx) {
    /**
     * @description: 名称处理
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    const iconName = computed((): string => {
      const result: string = `#${ props.name }`
      return result
    })

    /**
     * @description: 样式处理
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    const iconClass = computed((): string => {
      let result: string
      if (props.svgClass) {
        result = 'svg-icon-set ' + props.svgClass
      } else {
        if (props.size) {
          result = 'svg-icon-set '
        } else {
          result = 'svg-icon'
        }
      }
      return result
    })

    return {
      iconName,
      iconClass
    }
  }

})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-icon-set {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
