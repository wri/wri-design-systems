---
name: a11y-checker
description: Reviews UI code (HTML, JSX, TSX, etc.) for accessibility (a11y) compliance across both library development (WRI Design System) and generic web applications, providing concrete guidelines and code-level fixes.
---

When running the accessibility checker on any codebase, follow this multi-tiered guide to ensure compliance with universal WCAG standards as well as library-specific rules.

## 1. Universal Accessibility Standards (Any Web Project)

Apply these rules to any kind of project (plain HTML, native React, or other UI libraries):

### Accessible Names & Interactive Elements

- **Discernible Text**: Every clickable control (buttons, links, inputs) must have a discernible text label.
- **Icon-Only Actions**: If a button contains only an icon or image, it must receive an `aria-label` or `aria-labelledby` attribute (e.g., `<button aria-label="Close dialog">` or `<IconButton aria-label="Delete item" />`).
- **Images and SVGs**:
  - Standalone SVGs used as controls must have `role="img"` and an `aria-label`.
  - Decorative icons or illustrations must have `aria-hidden="true"` or `alt=""` so they are ignored by screen readers.

### Forms & Input Controls

- **Explicit Associations**: Native HTML form controls must have a `<label>` explicitly linked using the `for` (or `htmlFor` in React) and `id` attributes.
- **Accessible Placeholders**: A `placeholder` is not an accessible label. A proper visible label or `aria-label` must always be provided.
- **Validation Signals**: Error states must never rely on color changes alone. Set `aria-invalid="true"` and programmatically link the input to its validation error message using `aria-describedby="error-message-id"`.

### Layout & Landmark Structures

- **Semantic HTML**: Use correct semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<section>`) instead of generic `<div>` wrappers.
- **Multiple Landmarks**: If a page has multiple navigation regions, distinguish them using unique `aria-label` attributes (e.g., `<nav aria-label="Main navigation">` and `<nav aria-label="Footer navigation">`).

### Keyboard Navigation & Focus Management

- **Focus Path**: Every interactive element must be reachable using the `Tab` key. Custom non-interactive elements that trigger actions (e.g., a clickable `div`) must have `tabindex="0"`.
- **Keyboard Triggers**: Custom interactive elements must handle `Enter` and `Space` key presses using keydown/keyup event handlers.
- **Visible Focus**: Never suppress the browser's default focus outlines (`outline: none` or `outline: 0`) unless you are explicitly defining custom, highly-visible CSS focus indicator styles (e.g. using `:focus-visible`).
- **Overlay Focus Traps**: Modals, slide-out panels, and dropdown menus must trap keyboard focus inside them while open, and must restore focus to the triggering element upon closure.

### Data & Tabular Layouts

- **Tables**: HTML tables must use correct semantic markup (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`). Headers should use `scope="col"` or `scope="row"`. Provide a `<caption>` or an `aria-label` to summarize the table structure.
- **Sortable Columns**: Header cells representing sortable columns must declare the current sort order via `aria-sort` (e.g. `aria-sort="ascending"` or `aria-sort="descending"`).

---

## 2. Project-Specific Rules

### Context A: WRI Design System Library Contributor (`src/components/**`)

When writing or updating components inside the `@worldresources/wri-design-systems` library:

- **Expose ARIA Props**: Ensure TypeScript interfaces in `types.ts` explicitly declare standard `aria-*` props, and forward them directly to the underlying elements.
- **Defaults**: Check the component documentation guidelines in `contributor-ai/a11y.instructions.md`.
- **Test with Axe**: Write stories (`*.stories.tsx`) that demonstrate accessible configurations and include testing using `jest-axe` or Storybook's built-in a11y tools.

### Context B: Consumer Apps using WRI Design System

When consuming WRI DS components in external applications:

- **Use Wrapper API**: Prefer built-in design system properties (e.g., `label` and `error` props on `TextInput` or `Select`) which automatically wire up proper markup, instead of manually writing custom ARIA glue.
- **No Overrides**: Never add `tabIndex={-1}` or visual overrides that hide focus rings on standard DS buttons or inputs.

---

## 3. Auditing Process

When checking a file, follow this flow:

1. **Interactive Control Scan**: Locate all interactive controls (buttons, links, custom clickable elements). Verify that each has a discernible name (text, `aria-label`, or linked label).
2. **Keyboard Path Audit**: Trace where focus moves. Ensure overlays/modals have trap-and-release focus management, and focus indicators are visible.
3. **Form Wiring Verification**: Check that all input fields have valid labels, required states (`aria-required`), and connected error messages.
4. **Markup Semantics Check**: Ensure landmarks exist and no inline SVG or icon lack proper `aria-hidden` or label states.

---

## 4. Code Examples (Common Fixes)

### Custom Icon Buttons

```tsx
// ❌ HTML / Generic React Error (No accessible name, icon read as raw text or ignored)
<button onClick={onClose}><CloseIcon /></button>

// ✅ HTML / Generic React Fix
<button aria-label="Close dialog" onClick={onClose}>
  <CloseIcon aria-hidden="true" />
</button>

// ✅ WRI DS Fix
<IconButton aria-label="Close dialog" icon={<CloseIcon aria-hidden="true" />} onClick={onClose} />
```

### Form Fields with Error States

```tsx
// ❌ Generic HTML Error (Color only, screen reader cannot read validation error connection)
<input type="email" style={{ borderColor: 'red' }} />
<span className="error">Invalid email address</span>

// ✅ Generic HTML Fix
<label htmlFor="email-input">Email Address</label>
<input
  id="email-input"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error-msg"
/>
<span id="email-error-msg" className="error">Invalid email address</span>

// ✅ WRI DS Fix
<TextInput
  label="Email Address"
  error="Invalid email address"
  aria-invalid={true}
  aria-describedby="email-error-msg"
  id="email-input"
/>
```
