# Checkbox

## Checkbox Group

```ts
interface Option {
    label: string;
    value: string;
    disabled?: boolean;
}

interface CheckboxGroupProps {
    options?: Option[];
    value?: string[];
    onChange?: (value: string[]) => void;
}
```
