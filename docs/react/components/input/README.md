# Input

```ts
interface InputProps {
    disabled?: boolean;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    maxLength?: number;
}
```

```ts
declare namespace React {
    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
}
```
