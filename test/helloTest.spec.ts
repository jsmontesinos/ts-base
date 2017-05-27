import hello from '../src/helloTest';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  
  const targetTest: string[] = ["Jhon", "World", "Universe"];
  targetTest.forEach(target => 
    it(`should return hello ${target}`, () => {
      const result = hello(target);
      expect(result).to.equal(`Hello ${target}!`);
    })
  );
  
});