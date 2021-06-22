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
    //todo author, year, category, language
    it('Update data when inserting into author field', () => {
        const src = faker.name.findName();

        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.author');
        input.setValue(src);
        expect(wrapper.vm.author).toEqual(src);
    });

    it('Update data when inserting into year field', () => {
        const src = faker.datatype.number();

        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.year');
        input.setValue(src);
        expect(Number(wrapper.vm.year)).toEqual(src);
    });   

    it('Update data when inserting into category field', () => {
        const src = faker.commerce.productAdjective();

        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.category');
        input.setValue(src);
        expect(wrapper.vm.category).toEqual(src);
    });

    it('Update data when inserting into language field', () => {
        const src = faker.internet.domainName();

        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.language');
        input.setValue(src);
        expect(wrapper.vm.language).toEqual(src);
    });
})

