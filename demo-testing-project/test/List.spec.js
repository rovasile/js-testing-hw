import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import List from '@/components/others/List.vue';

describe('List.vue', () => {
    it('Check if the number of elements corresponds to the target', () => {
       const list = [faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName()];
       const wrapper = shallowMount(List, {propsData: {items: list}});
      expect(wrapper.findAll('li')).toHaveLength(list.length);
    });
})
