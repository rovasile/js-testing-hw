import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import List from '@/components/BooksList.vue';
import {Books} from '../src/util/constant.js';

describe('List.vue', () => {
    it('renders list items for each item in props.items', () => {
        const books = Books;
        books.forEach((book) => {
            book.id = faker.random.alphaNumeric(10);
        });

        const wrapper = shallowMount(List, {
            propsData: {
                books
            }
        });
        expect(wrapper.findAll({name: 'Book'})).toHaveLength(Books.length);
    })
})

