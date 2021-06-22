import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import Book from '@/components/Book.vue';

describe('Book.vue', () => {
    it('should throw error if name is not provided', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                author: 'Ion Creanga'
            }
        }).toThrow(`[Vue warn]: Missing required prop: "name"`));
    });

    it('Book component should display the value of name prop', () => {
        const book = {
            id: faker.random.alphaNumeric(10),
            name: faker.name.title(),
            author: faker.lorem.word()
        };
        const wrapper = shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: book.name,
                author: book.author
            }
        });

        expect(wrapper.find('.name').text()).toEqual(book.name);
        expect(wrapper.find('.author').text()).toEqual(`by ${book.author}`);
    });

    it('should throw error if language is not accepted', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: faker.name.title(),
                author: faker.lorem.word(),
                language: faker.lorem.word()
            }
        }).toThrow());
    });
    //todo error if author missing, if id missing, 
    it('should throw error if ID is missing', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                author: faker.name.findName(),
                name: faker.name.title(),
            }
        }).toThrow(`[Vue warn]: Missing required prop: "id"`));
    });

    it('should throw error if author is missing', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                name: faker.name.title(),
                id: faker.datatype.number(),
            }
        }).toThrow(`[Vue warn]: Missing required prop: "author"`));
    });


})

