# Portfolio Management Guide

This guide explains how to easily add new content to your personal website without modifying the code structure.

## Overview

Your website uses a modular content management system where all personal information is stored in JSON files located in the `src/data/` directory. This allows you to update content without touching any code.

## Content Files Structure

```
src/data/
├── personal-info.json    # Basic personal information and contact details
├── education.json        # Educational background and achievements
├── experience.json       # Work experience and internships
├── projects.json         # Software projects and competitions
├── skills.json          # Technical and professional skills
├── leadership.json      # Leadership roles and community involvement
```

## Adding New Content

### 1. Adding New Projects

To add a new project, edit `src/data/projects.json`:

```json
{
  "id": "unique-project-id",
  "title": "Project Name",
  "category": "Project Category (e.g., 'Independent Software Development')",
  "period": "Start Date - End Date (e.g., '1 2025 - 3 2025')",
  "level": "Achievement Level (optional, e.g., 'Winner', 'Top 10')",
  "achievement": "Specific Achievement (optional, e.g., '1st Place')",
  "description": "Brief project description",
  "details": [
    "Key feature or accomplishment 1",
    "Key feature or accomplishment 2",
    "Key feature or accomplishment 3"
  ],
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "type": "project-type (mobile/competition/business/web/etc)"
}
```

**Project Types and Their Colors:**
- `mobile`: Orange to Brown gradient
- `competition`: Red to Orange gradient  
- `business`: Brown to Red gradient
- `web`: Default Orange to Red gradient

### 2. Adding New Work Experience

To add new work experience, edit `src/data/experience.json`:

```json
{
  "id": "unique-experience-id",
  "company": "Company Name",
  "position": "Your Position Title",
  "period": "Start Date - End Date",
  "description": "Brief role description",
  "achievements": [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3"
  ],
  "type": "experience-type (leadership/trading/development/research)"
}
```

**Experience Types and Their Colors:**
- `leadership`: Orange to Red gradient
- `trading`: Brown to Orange gradient
- `development`: Red to Brown gradient
- `research`: Light Orange to Light Red gradient

### 3. Adding New Skills

To add new skills, edit `src/data/skills.json`:

#### Technical Skills
Add to the `technical` array:
```json
{
  "category": "Skill Category Name",
  "skills": ["Skill1", "Skill2", "Skill3"]
}
```

#### Professional Skills
Add to the `nonTechnical` array:
```json
{
  "category": "Skill Category Name", 
  "skills": ["Skill1", "Skill2", "Skill3"]
}
```

#### Languages
Add to the `languages` array:
```json
"New Language"
```

#### Certifications
Add to the `certifications` array:
```json
"New Certification Name"
```

### 4. Adding New Leadership Roles

To add new leadership positions, edit `src/data/leadership.json`:

```json
{
  "id": "unique-leadership-id",
  "title": "Leadership Position Title",
  "organization": "Organization Name",
  "period": "Start Date - End Date",
  "type": "Role Type (e.g., 'Ambassador', 'Leader', 'Director')",
  "description": "Description of your role and responsibilities"
}
```

### 5. Updating Personal Information

Edit `src/data/personal-info.json` to update:
- Contact information (email, LinkedIn, GitHub)
- Bio and subtitle
- Current location
- GPA or other basic info

### 6. Adding New Education

Edit `src/data/education.json` to update:
- Degree information
- Institution details
- Achievements and activities
- GPA updates

## Best Practices

### Content Guidelines
1. **Keep descriptions concise** - Aim for 1-2 sentences for descriptions
2. **Use bullet points** - Break achievements into clear, specific points
3. **Be consistent with dates** - Use format "MM YYYY" or "MM YYYY - MM YYYY"
4. **Use action verbs** - Start achievement bullets with strong action words

### Technical Guidelines
1. **Unique IDs** - Always use unique IDs for new entries
2. **Valid JSON** - Ensure proper JSON syntax (commas, quotes, brackets)
3. **Array order** - New items are typically added at the beginning of arrays
4. **No code changes** - Never modify the React components, only JSON files

## Testing Your Changes

After updating any JSON files:

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to see your changes

2. **Build Testing:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy Updates:**
   The website will automatically reflect your JSON changes when deployed

## File Validation

Before deploying, ensure your JSON files are valid:
- Use a JSON validator online
- Check for missing commas, quotes, or brackets
- Ensure all required fields are present

## Troubleshooting

**Common Issues:**
1. **Website not loading** - Check JSON syntax in browser console
2. **Missing content** - Verify file paths and JSON structure
3. **Styling issues** - Ensure `type` fields match expected values

**Getting Help:**
- Check browser developer console for errors
- Validate JSON files online
- Compare new entries with existing ones for format reference

## Future Enhancements

This modular system makes it easy to:
- Add new content sections by creating new JSON files
- Modify the color scheme in `tailwind.config.js`
- Add new project/experience types with custom styling
- Integrate with a CMS for non-technical content management

---

**Remember:** You only need to edit JSON files in the `src/data/` directory. The website will automatically display your new content with the same beautiful animations and styling!
