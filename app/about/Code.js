import React from 'react'

const Code = () => {
  return (
    <div>
        <pre>
            <code>
                {
`class Human {
    private String name;
    private String profession;
    private String education;
    private double cgpa;

    // Work Experience Array (Company, Position, Duration, Responsibilities)
    private String[][] workExperience = {
        {"Onsite Electro Service", "Software Engineer", "Aug 2024 – Present", 
            "- Upgraded React Native framework from v0.72 to v0.76, improving app performance by 20%.\n" +
            "- Implemented ad-hoc SKU creation, reducing product configuration time by 30%.\n" +
            "- Led ERP migration from SAP to ERPNext, enhancing system functionality.\n" +
            "- Contributed to schema redesign for a scalable, multi-incentive handling structure."
        },
        {"Onsite Electro Service", "Software Engineer Intern", "June 2023 – July 2024", 
            "- Enhanced backend security with encryption and Redis caching (ISO 27001 compliant).\n" +
            "- Developed a referral program, increasing monthly revenue by 15%.\n" +
            "- Built a React & Django-based portal, saving 10+ hours/week for product and sales teams."
        }
    };

    public Human(String name, String profession, String education, double cgpa) {
        this.name = name;
        this.profession = profession;
        this.education = education;
        this.cgpa = cgpa;
    }

    public void introduce() {
        System.out.println("👋 Hi, I'm " + name + ". I'm a " + profession + " passionate about coding and problem-solving.");
    }

    public void displayEducation() {
        System.out.println("\n🎓 Education:");
        System.out.println("   " + education + " | CGPA: " + cgpa + "/10.0");
    }

    public void displayWorkExperience() {
        System.out.println("\n💼 Work Experience:");
        for (String[] job : workExperience) {
            System.out.println("   " + job[1] + " at " + job[0] + " (" + job[2] + ")");
            System.out.println("   " + job[3] + "\n");
        }
    }

    public static void main(String[] args) {
        Human devansh = new Human("Devansh", "Software Engineer", "Chitkara University, B.E. in Computer Science", 9.62);
        devansh.introduce();
        devansh.displayEducation();
        devansh.displayWorkExperience();
    }
}`
                }
            </code>
        </pre>
    </div>
  )
}

export default Code