import { mount } from '@vue/test-utils';
import FunnyButton from '..';

test('render funny button', () => {
  const wrapper = mount(FunnyButton);
  expect(wrapper.html()).toMatchSnapshot();
});
