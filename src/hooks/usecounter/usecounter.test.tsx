import { act, renderHook } from '@testing-library/react';
import useCounter from './usecounter.hook';
describe('useCounter', () => {
	test('should render correctly', () => {
		const { result } = renderHook(useCounter);
		expect(result.current.count).toBe(0);
	});
	test('should accept and render the same initial count', () => {
		const { result } = renderHook(useCounter, {
			initialProps: {
				initialCount: 10,
			},
		});
		expect(result.current.count).toBe(10);
	});
	test('should increment the count', () => {
		const { result } = renderHook(useCounter);
		act(() => {
			result.current.incrementCount();
		});
		expect(result.current.count).toBe(1);
	});
	test('should decrement the count', () => {
		const { result } = renderHook(useCounter);
		act(() => {
			result.current.decrementCount();
		});
		expect(result.current.count).toBe(-1);
	});
});
