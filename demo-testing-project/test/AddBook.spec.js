import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import sinon from 'sinon';
import AddBook from '@/components/AddBook.vue';

describe('AddBook.vue', () => {
    it('Update data when inserting text in name input', () => {
        const name = faker.name.title();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.name');

        input.setValue(name);

        expect(wrapper.vm.name).toEqual(name);
    });

    it('Event is emit when clicking Add button', () => {
        const handler = sinon.stub();
        const spy = sinon.spy(handler);

        const wrapper = shallowMount(AddBook, {
            listeners: {
                'add': spy
            }
        });
        const button = wrapper.find('.add');

        button.trigger('click');

        expect(spy.called).toEqual(true);
    });

    it('Emit add event when calling submit method', () => {
        const wrapper = shallowMount(AddBook);

        wrapper.vm.$nextTick(() => {
            wrapper.vm.submit();
            expect(wrapper.emitted().add).toBeTruthy();
        });
    });
})

