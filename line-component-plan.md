# Equal Spacing Layout Issue - Debug Plan

## Problem Statement
The layout has floating rounded panels on a black background. The goal is to have **equal spacing** between:
- Viewport edges and panels (left/right margins)
- Panels and each other (vertical gaps)

Currently, the left/right margins appear **larger** than the gaps between components.

---

## Current Architecture

### Layout Structure (`app/layout.tsx`)
```tsx
<html lang="en" className="scroll-smooth bg-black">
  <body style={{ backgroundColor: '#000000', margin: 0, padding: 0 }}>
    <div style={{ margin: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="sticky z-50 rounded-[18px] overflow-hidden bg-white" style={{ top: '8px' }}>
        <TopBanner />
        <Header />
      </div>
      {children}  <!-- main with Hero, FeatureCards, Features, HowItWorks -->
      <Footer />
    </div>
  </body>
</html>
```

### Page Structure (`app/page.tsx`)
```tsx
<main style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing)' }}>
  <Hero />
  <FeatureCards />
  <Features />
  <HowItWorks />
</main>
```

### CSS Variables (`app/globals.css`)
```css
:root {
  --spacing: 8px;
}
```

### Component Structure (all similar)
Each component (Hero, FeatureCards, Features, HowItWorks, Footer) has:
```tsx
<section className="rounded-[18px] bg-[color] overflow-hidden">
  <div className="px-6 py-10 md:px-8 md:py-14">
    <!-- content -->
  </div>
</section>
```

---

## What We've Tried

### Attempt 1: Body Padding + Container Gap
```tsx
<body style={{ padding: 'var(--spacing)' }}>
  <div style={{ gap: 'var(--spacing)' }}>
```
**Result:** Sides still appeared larger than gaps.

### Attempt 2: Added max-width to Container
```tsx
<div style={{ maxWidth: '1296px', margin: '0 auto', gap: 'var(--spacing)' }}>
```
**Result:** Did not fix the visual disparity.

### Attempt 3: Removed max-w-7xl from Component Inners
Previously each component had:
```tsx
<div className="mx-auto max-w-7xl px-6">
```
Changed to:
```tsx
<div className="px-6">
```
**Result:** Better, but still not equal.

### Attempt 4: Explicit Pixel Values with Margin
```tsx
<body style={{ margin: 0, padding: 0 }}>
  <div style={{ margin: '8px', gap: '8px' }}>
```
**Result:** Still appears unequal.

---

## Potential Root Causes

### 1. Visual Illusion from Rounded Corners
- Panels have `rounded-[18px]` (18px border-radius)
- The visual "edge" of content is the curve, not the actual box edge
- This makes the apparent margin look larger than the actual 8px

### 2. Internal Padding Disparity
- Components have `px-6` (24px) or `px-8` (32px) internal horizontal padding
- This is 3-4x larger than the 8px outer gap
- Creates visual weight imbalance

### 3. Nested Gap Inheritance
- `page.tsx` main element has `gap: var(--spacing)`
- `layout.tsx` container also has `gap: 8px`
- Both are applying gaps, but only layout.tsx controls the outer margin

### 4. Sticky Header Offset
- Header has `top: 8px` for sticky positioning
- May create visual inconsistency when scrolled

### 5. Browser Default Styles
- Despite CSS reset, some browsers may add extra spacing
- `html` element might have margin/padding not being reset

---

## Next Steps to Try

### Option A: Match Internal Padding to External Gap
Make the internal padding equal to the outer gap for visual consistency:
```tsx
// Instead of px-6 (24px), use px-2 (8px) to match the 8px gap
<div className="px-2 py-10">
```
**Trade-off:** Content may feel cramped.

### Option B: Increase Outer Gap to Match Internal Padding
```tsx
<div style={{ margin: '24px', gap: '24px' }}>
```
**Trade-off:** More black background visible, may not match design intent.

### Option C: Use CSS Grid Instead of Flexbox
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '8px',
  padding: '8px'
}}>
```
CSS Grid may handle spacing more predictably.

### Option D: Viewport Units for Responsive Spacing
```css
:root {
  --spacing: min(2vw, 16px);
}
```
This scales with viewport but caps at 16px.

### Option E: Negative Margin Technique
```css
.container {
  --gap: 8px;
  display: flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--gap));
  padding: var(--gap);
}
.container > * {
  margin: var(--gap);
}
```
Classic technique for equal spacing before `gap` was widely supported.

### Option F: Remove Rounded Corners Temporarily
Test if the rounded corners are causing the visual illusion:
```tsx
<section className="bg-[color] overflow-hidden">  // removed rounded-[18px]
```
If spacing looks equal without rounded corners, the issue is perceptual.

### Option G: Use Outline for Debugging
Add visible outlines to see actual box boundaries:
```css
* { outline: 1px solid red !important; }
```
This reveals the true edges vs. perceived edges.

### Option H: Consistent Spacing with CSS Custom Property
Ensure ALL spacing uses the same variable:
```css
:root { --gap: 8px; }
```
```tsx
<body style={{ padding: 'var(--gap)' }}>
  <div style={{ gap: 'var(--gap)' }}>
    <main style={{ gap: 'var(--gap)' }}>
```

---

## Reference Design
The target look is based on Chorke's design (IMG_4567.jpeg):
- Black page background
- Floating rounded white/colored panels
- Equal spacing on all sides (viewport edges = gaps between panels)
- Clean, minimal gaps (~8-16px)

---

## Key Files to Modify

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Main layout wrapper, body styles, container |
| `app/page.tsx` | Main content with gap between sections |
| `app/globals.css` | CSS variables, resets |
| `components/Hero.tsx` | First content panel |
| `components/FeatureCards.tsx` | Second content panel |
| `components/Features.tsx` | Third content panel |
| `components/HowItWorks.tsx` | Fourth content panel |
| `components/Footer.tsx` | Footer panel |
| `components/Header.tsx` | Header (inside sticky wrapper) |
| `components/TopBanner.tsx` | Banner (inside sticky wrapper) |

---

## Resources

- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Gap Property](https://css-tricks.com/almanac/properties/g/gap/)
- [Spacing in CSS by Ahmad Shadeed](https://ishadeed.com/article/spacing-in-css/)
- [CSS Gap vs Margin - LogRocket](https://blog.logrocket.com/css-gap-vs-margin/)
- [CSS Gap Space with Flexbox](https://coryrylan.com/blog/css-gap-space-with-flexbox)

---

## Success Criteria
- [ ] Left margin = Right margin = Gap between panels
- [ ] Spacing is consistent on mobile, tablet, and desktop
- [ ] Black background is visible equally on all sides
- [ ] Rounded corners don't create visual imbalance
