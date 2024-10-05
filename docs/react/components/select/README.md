# Select

```ts
interface Option {
    label: React.ReactNode;
    value: string;
}
interface SelectProps {
    options: Option[];
    value?: string[];
    onChange?: (value: string[]) => void;
}
```
