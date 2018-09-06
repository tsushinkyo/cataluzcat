import { TestWindow } from '@stencil/core/dist/testing';
import {  Category } from './cz-category';

describe('cz-category', () => {
  it('should build', () => {
    expect(new Category()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCzCategoryElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Category],
        html: '<cz-category></cz-category>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with an icon', async () => {
      element.image = 'https://www.fadata.eu/wp-content/uploads/2012/10/icon-insis-life.png';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    it('should work with a category name', async () => {
      element.name = 'Life';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    });

    it('should work with both an icon and name', async () => {
      element.image = 'https://www.fadata.eu/wp-content/uploads/2012/10/icon-insis-life.png';
      element.name = 'Parker';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });
  });
});
