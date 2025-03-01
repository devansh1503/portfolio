import React from 'react'

const Code = () => {
  return (
    <div>
        <pre>
            <code>
                {
`class Human {
    private String name;
    private int age;
    private String[] hobbies = {"Photography", "Story-Writing", "Coding", "Digital Art"};

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("Hi, I'm " + name + ", " + age + " years old, and I have some fascinating hobbies!");
    }

    public void enjoyHobby(String hobby) {
        switch (hobby) {
            case "Photography":
                System.out.println("📸 I capture moments that tell a story, freezing time with my lens.");
                break;
            case "Story-Writing":
                System.out.println("📝 I create worlds with words, letting my imagination run wild on paper.");
                break;
            case "Coding":
                System.out.println("💻 I bring ideas to life through code, solving problems and building solutions.");
                break;
            case "Digital Art":
                System.out.println("🎨 I paint with pixels, expressing creativity through digital brushes.");
                break;
            default:
                System.out.println("I enjoy exploring new hobbies as well!");
        }
    }

    public void showcaseHobbies() {
        System.out.println("\nHere are the things I love to do:");
        for (String hobby : hobbies) {
            enjoyHobby(hobby);
        }
    }

    public static void main(String[] args) {
        Human devansh = new Human("Devansh", 23);
        devansh.introduce();
        devansh.showcaseHobbies();
    }
}

`
                }
            </code>
        </pre>
    </div>
  )
}

export default Code