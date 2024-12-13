# React Router Dom Nested Route Bug

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The problem arises when attempting to directly access a nested route without first navigating to its parent route.  This can lead to unexpected rendering behavior or routing failures.

## Problem
The provided code snippet shows a typical nested route setup using `Routes` and `Route`. However, directly navigating to `/contact/form` might not render the `ContactForm` component as expected.  The application might render the Contact component instead or simply fail to navigate.

## Solution
The solution involves careful consideration of route nesting and ensuring proper route matching.  The solution may involve modifying the route structure or handling navigation differently to explicitly manage transitions between parent and child routes. 
