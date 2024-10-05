# Form

```ts
/**
 * onChange
 * onBlur
 * none -> disable automatic validation, you'll to call 'validateFields' manually.
 */ 
type ValidateTrigger = 'onChange' | 'onBlur' | 'onSubmit' | 'none';
interface FormProps {
  validateTrigger?: ValidateTrigger;
}
```

## hooks

```ts
type Form.useForm=(): [FormInstance]
type Form.useFormInstance=(): FormInstance
type Form.useWatch=(name:NamePath, formInstance?: FormInstance): Value
type Form.Item.useStatus=(): { status, errors, warnings }
```

## FormItem

```ts
type NamePath = string | number | (string | number)[];
type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);

interface RuleConfig {
  required?: boolean;
  message?: string;
  pattern?: RegExp;
  validator?: (rule, value) => Promise;
}

interface FormItemProps {
  name: NamePath;
  rules?: Rule[];
  label?: string;
  hidden?: boolean;
  extra?: React.ReactNode;
}
```
