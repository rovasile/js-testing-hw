import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import MessageToggle from '@/components/others/MessageToggle.vue';

describe('MessageToggle.vue', () => {
    it('Check if msg is null by default', () => {
        const wrapper = shallowMount(MessageToggle, {propsData:{}});
        expect(wrapper.vm.msg).toEqual(null);
    });

    it('Check if msg is changed accordingly', () => {
        const message = faker.lorem.sentence();
        const wrapper = shallowMount(MessageToggle, {});
        wrapper.setData({msg: message})
        expect(wrapper.vm.msg).toEqual(message);
    });

    it('Check if msg is `message` on one toggle', () => {
        const wrapper = shallowMount(MessageToggle, {});
        const target = 'message';
        wrapper.vm.toggleMessage();
        expect(wrapper.vm.msg).toEqual(target);
    });

    it('Check if msg is `toggled message` on one toggle', () => {
        const wrapper = shallowMount(MessageToggle, {});
        const target = 'toggled message';
        wrapper.vm.toggleMessage();
        wrapper.vm.toggleMessage();
        expect(wrapper.vm.msg).toEqual(target);
    });

})