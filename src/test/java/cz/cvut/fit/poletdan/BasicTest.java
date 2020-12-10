package cz.cvut.fit.poletdan;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class BasicTest {

    @Test
    public void shouldPass() {
        assertEquals(1,1);
    }

    @Test
    public void shouldFail() {
        assertEquals("Maven", "Maven");
    }
}
