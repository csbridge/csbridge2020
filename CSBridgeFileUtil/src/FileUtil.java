import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public interface FileUtil {
	default ArrayList<String> readFile(String fileName) {
		try {
			return new ArrayList<String>(Files.readAllLines(Paths.get(fileName)));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
