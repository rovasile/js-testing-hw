import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import Message from '@/components/others/Message.vue';

describe('Message.vue', () => {
    it('Check for the correct text', () => {
        const sentence = faker.lorem.sentence();
        const wrapper = shallowMount(Message, {propsData: {msg: sentence}});
        expect(wrapper.find('h1').text()).toEqual(sentence);
    });

   it('Check for the default text if prop is missing', () => {
        const defaultValue='default message';
        const wrapper = shallowMount(Message, {propsData: {}});
        expect(wrapper.find('h1').text()).toEqual(defaultValue);
    });
})