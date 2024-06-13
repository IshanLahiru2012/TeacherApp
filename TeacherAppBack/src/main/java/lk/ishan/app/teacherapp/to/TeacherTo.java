package lk.ishan.app.teacherapp.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherTo {
    @Positive(message = "id must be positive")
    private int id;
    @NotNull(message = "Teacher name cannot be empty")
    private String name;
}
