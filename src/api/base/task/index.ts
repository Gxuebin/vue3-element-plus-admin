/*
 * @Description: 定时任务
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-05-20 15:46:39
 */
import service from '@/utils/request'
import { PageData, PageParams, ResponseData } from 'axios'
import { Task } from 'Type/task'

interface pageParams extends PageParams {
  bean_name: string
}

/**
 * @description: 分页列表
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function pageApi(params: pageParams): Promise<ResponseData<PageData<Task.Base>>> {
  return service({
    url: '/base/schedule/task/page',
    method: 'get',
    params: params
  })
}

/**
 * @description: 信息
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function infoApi(params: number): Promise<ResponseData<Task.Base>> {
  return service({
    url: `/base/schedule/task/info/${ params }`,
    method: 'get'
  })
}

/**
 * @description: 新增
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function addApi(params: Task.Base): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/create',
    method: 'post',
    data: params
  })
}

/**
 * @description: 编辑
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function editApi(params: Task.Base): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/update',
    method: 'post',
    data: params
  })
}

/**
 * @description: 删除
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function delApi(params: number[]): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/delete',
    method: 'post',
    data: params
  })
}

/**
 * @description: 立即执行
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function runApi(params: number[]): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/run',
    method: 'post',
    data: params
  })
}

/**
 * @description: 恢复
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function resumeApi(params: number[]): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/resume',
    method: 'post',
    data: params
  })
}

/**
 * @description: 暂停
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function pauseApi(params: number[]): Promise<ResponseData<null>> {
  return service({
    url: '/base/schedule/task/pause',
    method: 'post',
    data: params
  })
}
