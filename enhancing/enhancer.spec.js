const enhancer = require('./enhancer.js');

describe('Sanity and intro', () => {
    it('works', () => {
        expect(2 + 2).toBe(4)
    })
    test('everything working', () => {
        expect({}).not.toBe({})
        expect({}).toEqual({})
    })
})

describe('Enhancer', () => {
    beforeEach(() => {
        item = { name: 'broadsword',
                durability: 70,
                enhancement: 10
                }
    })
    it('item is defined', () => {
        expect(item).toBeDefined()
    })
    it('durability is defined', () => {
        expect(item.durability).toBeDefined()
        expect(item.durability).toBe(70)
        })
    it('enhancement is defined', () => {
        expect(item.enhancement).toBeDefined()
        expect(item.enhancement).toBe(10)
        })
    it('can restore the durability back to 100', () => {
        enhancer.repair(item)
        expect(item.durability).toBe(100)
    })
    it('success method works', () => {
        enhancer.success(item)
        expect(item.enhancement).toBe(11)
    })
    it('fail method works', () => {
        enhancer.fail(item)
        expect(item.durability).toBe(65)
    })
})
